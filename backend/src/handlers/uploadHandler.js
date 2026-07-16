export const uploadHandler = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  res.status(200).json({
    message: "Upload successful",
    file: req.file.filename,
  });
};
export const uploadMultipleFiles = (req, res) => {
  if (!req.files || req.files.length == 0) {
    return res.status(400).json({
      success: false,
      message: "No files uploaded",
    });
  }
  let files = req.files.map((fi) => {
    return {
      filename: fi.filename,
      size: fi.size,
      mimetype: fi.mimetype,
      upload_path: `/uploads/${fi.filename}`,
    };
  });
  res.status(200).json({
    success: true,
    data: files,
  });
};
