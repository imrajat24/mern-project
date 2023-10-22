const asyncHandler = require("express-async-handler");

// @desc   Getting user goals
// @route  GET /api/goals
// @access Private

const getGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: "getting all the goals!!" });
});

// @desc   Setting user goal
// @route  POST /api/goals
// @access Private

const setGoal = asyncHandler((req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please send the goal name");
  }
  res.status(200).json({ message: "setting a particular goal!!" });
});

// @desc   Edit a specific user goal
// @route  PUT /api/goals
// @access Private

const editGoal = asyncHandler((req, res) => {
  res
    .status(200)
    .json({ message: `editing the goal number: ${req.params.id}` });
});

// @desc   Delete a specific user goal
// @route  DELETE /api/goals
// @access Private

const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `deleting goal number : ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  editGoal,
  deleteGoal,
};
