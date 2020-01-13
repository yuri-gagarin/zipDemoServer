// import testController from "../controllers/testController";

export default function (router) {
  router.get("/api/test", (req, res) => {
    res.status(200).json({
      message: "Test ok",
      data: {
        data: "Some data here"
      }
    });
  });
}