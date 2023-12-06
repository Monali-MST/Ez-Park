const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

/** middleware for verify user */
async function verifyUser(req, res, next) {
  const { username } = req.method == "GET" ? req.query : req.body;
  console.log(req.body);
  const sql = "SELECT * from ezpark.user_details where Email ='" + username + "'";
  console.log(sql);
  try {
    connection.query(sql, function (err, result, fields) {
      console.log(result)
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        if (!result.length > 0) {
          return res.status(404).send({ error: "Can't find the user" });
        } else {
          next();
          //return res.status(200).send(email);
        }
      }
    });
  } catch (error) {
    return res.status(404).send({ msg: "Authentication Error", error });
  }
}

async function register(req, res) {
  const data = req.body;
  console.log(data);
  const exist_email_sql =
    "SELECT Email from ezpark.user_details where Email ='" + data.Email + "'";
  // const exist_username = "Select username from user_credentials where username = '"+ data.username+"'";
  //const user_register_sql1 = "INSERT INTO user_credentials (username , fname ,lname ,email ,password ,profile) " + "VALUES ('"+data.username+"','"+data.fname+"','"+data.lname+"','"+data.Email+"','"+data.password+"','"+data.profile+"')";
  const user_register_sql =
    "INSERT INTO `ezpark`.`user_details` (`FirstName`, `LastName`, `AddFLine`, `AddSLine`, `City`, `PostCode`, `MobileNo`, `NIC`, `Email`, `Password`)" +
    "VALUES ('" +
    data.Fname +
    "', '" +
    data.Lname +
    "', '" +
    data.AddFLine +
    "', '" +
    data.AddSLine +
    "', '" +
    data.City +
    "', '" +
    data.PCode +
    "', '" +
    data.MobNum +
    "', '" +
    data.Nic +
    "', '" +
    data.Email +
    "', '" +
    data.Pword +
    "'); ";

  try {
    connection.query(
      exist_email_sql,
      function (exist_email_err, result_check_email, fields) {
        if (exist_email_err) {
          console.log(exist_email_err);
          res.status(500).send(exist_email_err);
        } else {
          console.log(result_check_email[0]);
          if (result_check_email.length > 0) {
            return res
              .status(500)
              .send("This email is already registered. Please login in.");
          } else {
            connection.query(user_register_sql, function (err, result, fields) {
              if (err) {
                console.log(err);
                return res.status(500).send(err);
              } else {
                return res.status(201).send("User registered successfully.");
              }
            });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
}

async function login(req, res) {
  const data = req.body;
  const { username } = req.body;
  connection.query(
    queries.get_user_by_email,
    [username],
    function (err, result, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ err });
      } else {
        if (result.length > 0) {
          if (result[0].Password === data.password) {
            const token = jwt.sign(
              {
                userid: result.UserID,
                email: data.Email,
              },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "24h" }
            );
            return res.status(200).send({ msg: "Login successful!", token });
          } else {
            return res.status(500).send("Password did not matched");
          }
        } else {
          return res.status(500).send("Entered email doesn't exist");
        }
      }
    }
  );
}

async function getUser(req, res) {
  const { email } = req.body;
  console.log(req.body);
  try {
    if (!email) return res.status(501).send({ error: "Invalid email" });
    const sql =
      "SELECT * from ezpark.user_details where Email ='" + email + "'";
    connection.query(sql, function (err, result, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ err });
      } else {
        if (!result.length > 0) {
          return res.status(501).send({ error: "Could't find a user" });
        } else {
          const { password, ...rest } = result[0];
          return res.status(201).send(rest);
        }
      }
    });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
}

async function generateOTP(req, res) {
  req.app.locals.OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({ code: req.app.locals.OTP, msg: "OTP" });
}

async function verifyOTP(req, res) {
  const { code } = req.query;
  console.log(req.app.locals.OTP);
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null; // reset the OTP value
    req.app.locals.otpSession = true; // start session for reset password
    return res.status(201).send({ msg: "Verify Successsfully!" });
  }
  return res.status(400).send({ error: "Invalid OTP" });
}

async function createResetSession(req, res) {
  if (req.app.locals.otpSession) {
    req.app.locals.otpSession = false;
    return res.status(201).send({ msg: "access granted!" });
  }
  return res.status(440).send({ msg: "Session expired" });
}

async function resetPassword(req, res) {
  const { Email, password } = req.body;
  const sql =
    "UPDATE `ezpark`.`user_details` SET `Password` = ?  WHERE (`Email` = ?);";
  const value = [password, Email];
  connection.query(sql, value, function (err, result, fields) {
    if (err) {
      console.log(err);
      res.status(500).send({ err });
    } else {
      return res.status(201).send("Password has been reset");
    }
  });
}
module.exports = { verifyUser, getUser, register, login, resetPassword };
