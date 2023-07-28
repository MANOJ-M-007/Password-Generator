const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const generateToken = require('../Util/Tocken')

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    mobile,
    password,
  } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('user Already Exists')
  }
  const user = await User.create({
    name,
    email,
    mobile,
    password,
  })
  if (user) {
    res.status(201).json({
      name,
      email,
      mobile,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Eror('Error Occured!')
  }
})

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid email or password!')
  }
})
const save = asyncHandler(async (req, res) => {
  const { application, password } = req.body;
  const user = await User.findById(req.user)
  if (!user.data) {
    user.data = [];
  }
  user.data.push({ password, application });
  await user.save()
  res.status(200).json({ message: 'Data saved successfully' });
})

const list = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user)
  res.status(200).json({
    data: user.data,
    // message: 'Data saved successfully'
  });
})


module.exports = {
  registerUser,
  login,
  save,
  list
}