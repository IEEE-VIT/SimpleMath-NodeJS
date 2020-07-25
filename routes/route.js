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

router.post("/floor", (req, res) => {
  try{
    const { param1 } = req.body;

    let result = Math.floor(parseFloat(param1, 10));

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated ${param1} floor`,
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

router.post("/areaOfCircle", (req, res) => {
  try{
    const { param1 } = req.body;

    let result = Math.PI * Math.pow(parseFloat(param1, 10),2);

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated area of circle with radius ${param1}`,
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

router.post("/areaOfRectangle", (req, res) => {
  try{
    const { param1, param2 } = req.body;

    let result = parseFloat(param2, 10) * parseFloat(param1, 10);

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated area of rectangle with sides ${param1}`,
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

router.post("/areaOfSquare", (req,res) => {
  try{
    const{ param1 } = req.body;
    let result = Math.pow(parseFloat(param1, 10),2);

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated area of Square with side ${param1}`,
        code: 200
      }
    }) ;
  }catch(err){
    res.json({
      meta:{
      success: false,
      message: err.message,
      code: 400
    }
  });
  }
});



module.exports = router;
