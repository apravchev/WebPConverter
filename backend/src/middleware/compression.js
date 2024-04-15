const imagemin = import("imagemin");
const imageminMozjpeg = import("imagemin-mozjpeg");

const compression = async (req, res, next) => {
  if (req.url.match(/\.(jpg|jpeg|png)$/)) {
    try {
      const files = await imagemin([path.join(__dirname, "public", req.url)], {
        destination: path.join(__dirname, "public"),
        plugins: [imageminMozjpeg({ quality: 25 })], // Adjust quality as needed
      });
      req.url = `/${files[0].destinationPath}`;
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  }
  next();
};
module.exports = compression;
