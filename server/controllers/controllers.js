const Input = require('../models/models');

exports.getFunc = async(req, res) => {
  try{
    const input = await Input.find();
    res.json(input);
    res.status(200)
  } catch(e){
    res.status(400);
  }
};

exports.postFunc = async(req,res) => {
  try{
    const newIput = new Input(req.body);
    console.log(newIput)
    const save = await newIput.save((error)=>{
      if(error) console.log(error)
    });
    // console.log(save)
    res.status(201);
    res.json(save);
  } catch(e) {
    res.status(404);
  }
};

exports.updateFunc = async(req,res) => {
  const id = req.params.id;
  const revision = req.body;
  try{
    if(Input['/' + id] !== null){
      Input['/' + id]= revision;
      res.json(Input);
    }
  }catch(e) {
    res.status(404)
  }
}

exports.updateFunc = async(req,res) => {
    const {positive, eventTitle, category, date, person, location, whatHappened, howDidYouFeel, happenedBefore, doDifferently, share, learned, plan} = req.body
    const updateOne = await Input.updateOne({_id : req.params.id}, {$set: {positive, eventTitle, category, date, person, location, whatHappened, howDidYouFeel, happenedBefore, doDifferently, share, learned, plan}});
     res.json({...req.body, _id:req.params.id});
}

exports.deleteFunc = async(req,res) => {
  const id = req.params.id;
  try{
    const deleteOne = await Input.findByIdAndDelete(id);
    res.json(deleteOne);
  } catch(e) {
    // console.log(error);
  }
}