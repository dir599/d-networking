import { loginUserValidationSchema } from "../../../../../studentrecord_workstation/backend/src/validators/authValidator";
import { asyncHandler } from "../middleware/asyncHandler";
import { registerUserService } from "../service/auth.service";
import { registerUserValidator } from "../validators/authValidator";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = registerUserValidator.parse(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
    },
  });
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = loginUserValidationSchema.parse(req.body);
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new Error("Invalid email or password");
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");
  const token = jwt.sign(
    {
      id: user.id,
    },
    secretKey,
    {
      expiresIn: "1d",
    },
  );
  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
});

export { registerUser, loginUser };
