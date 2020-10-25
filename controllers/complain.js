const Complain = require("../models/complain");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.create = (req, res) => {
  console.log(req.body)
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Image not found",
      });
    } else {
      const { name, description, category, pno, room, building, userid} = fields;
      if (!name || !description || !category || !room || !pno || !building ) {
        return res.status(400).json({
          error: "All fields are required",
        });
      }
      let complain = new Complain(fields);
      if (files.photo) {
        if (files.photo.size > 100000) {
          res.status(400).json({
            error: "Image should not be greater than 1MB",
          });
        } else {
          complain.photo.data = fs.readFileSync(files.photo.path);
          complain.photo.contentType = files.photo.type;
        }
      }

      complain.save((err, data) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.json({
            data,
          });
        }
      });
    }
  });
};

exports.update = (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: "Image not found",
      });
    } else {
      const { name, description, category, pno, room } = fields;
      if (!name || !description || !category || !room || !pno) {
        return res.status(400).json({
          error: "All fields are required",
        });
      }
      let complain = req.complain;
      //lodash allows us to update fields
      complain = _.extend(complain, fields);
      if (files.photo) {
        if (files.photo.size > 1000000) {
          res.status(400).json({
            error: "Image should not be greater than 1MB",
          });
        } else {
          complain.photo.data = fs.readFileSync(files.photo.path);
          complain.photo.contentType = files.photo.type;
        }
      }

      complain.save((err, data) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.json({
            data,
          });
        }
      });
    }
  });
};

exports.adminComplaints = (req, res) => {
  Complain.find({}, (error, complaints) => {
    if (error) {
      res.status(400).json({
        error: "Could not get Complaints",
      });
    }
    res.json({ complaints });
  });
};

exports.photo= (req,res,next) =>{
  if(req.complain.photo.data){
      res.set('Content-Type',req.complain.photo.contentType)
      return res.send(req.complain.photo.data)        
  }
next()  
}
exports.complaintbyid = (req, res,next,id) => {
  Complain.findById(id).exec((err,complaint)=>{
    console.log(complaint)
      if(err || !complaint){
        console.log(err)
         return res.status(400).json({
              error:"Complaint is not found"
          })
      }
      req.complain=complaint
      next()
  })  
 
}