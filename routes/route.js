const express = require("express");

const router = express.Router();

router.get("/check", (req, res) => {
  res.send("Congratulations! Your app works! :)");
});

router.post("add", (req, res) => {
  // Add logic here
});

router.post("/power", (req, res) => {
  let param1 = req.body.param1;
  let param2 = req.body.param2;

  res.json({
    result: Math.pow(param1, param2),
    meta: {
      success: true,
      message: `Calculated ${param1} raised to the power ${param2}`,
      code: 200
    }
  });
});

router.post("/factorial", (req, res) => {
  const { param1 } = req.body;

  try {
    let result = parseInt(param1, 10);

    if (result < 0) {
      return res.json({
        meta: {
          success: false,
          message: `${param1} is a negative number`,
          code: 400
        }
      });
    }
    for (let counter = result - 1; counter > 0; counter--) {
      result *= counter;
    }
    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated ${param1} factorial`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});

router.post("/ceil", (req, res) => {
  try {
    const { param1 } = req.body;

    let result = Math.ceil(parseFloat(param1, 10));
    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated ${param1} ceil`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});

router.post("/sigmoid", (req,resp)=>{
  try{
    const {param1}=req.body;
    const {param2}=req.body;
    
    let result=1/(1+Math.exp((-param1)*param2));

    resp.json({
      statusCode: 200,
      result: result,
      success: true
    });
  } catch(err) {
    resp.json({
      success: false,
      statusCode: 400,
      err: err.message
    });
  }
});

router.post("/arraySum", (req,resp)=>{
  try{
    const {param1}=req.body;
    
    var sum=0, i;

    for(i=0;i<param1.length;i++){
      sum+=param1[i];
    }

    resp.json({
      statusCode: 200,
      result: sum,
      success: true
    });
  } catch(err) {
    resp.json({
      success: false,
      statusCode: 400,
      err: err.message
    });
  }
});

router.post("/round", (req, res) => {
  try {
    const { param1 } = req.body;

    let result = Math.round(parseFloat(param1, 10));
    res.json({
      result: result,
        success: true,
        statusCode: 200
    });
  } catch (err) {
    res.json({
        success: false,
        err: err.message,
        statusCode: 400
    });
  }
});

module.exports = router;
