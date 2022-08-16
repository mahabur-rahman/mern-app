const UserModel = require("../models/userSchema");

// ############################## POST | REGISTER USER

// const userRegister = (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "plz fill the all field!" });
//   }

//   UserModel.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exist!" });
//       }

//       const user = new UserModel({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });

//       user
//         .save()
//         .then(() => {
//           return res
//             .status(201)
//             .json({ message: "user registered successful!" });
//         })
//         .catch((err) => {
//           return res.status(500).json({ error: err });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// ----------------- async a await
const userRegister = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill the all field!" });
  }

  const preUser = await UserModel.findOne({ email: email });

  if (preUser) {
    return res.status(422).json({ error: "Email already exist!" });
  }

  try {
    const user = await UserModel({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    // save on db
    const userData = await user.save();

    return res.status(201).json({ user: userData });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// ##############################

// export
module.exports = { userRegister };
