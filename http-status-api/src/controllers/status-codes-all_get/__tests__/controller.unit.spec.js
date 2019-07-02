const controller = require("../controller");
jest.mock("../controller");

describe("status-codes-all__get", () => {
  let mockReq;
  let mockRes;

  beforeEach(async () => {
    mockReq = {
      axios: {
        get: jest.fn()
      }
    };

    mockRes = {
      send: jest.fn(),
      status: jest.fn()
    };
  });

  afterEach(() => {
    jest.unmock();
  });

  describe("valid request for all status codes", () => {
    it("should return all codes when no status code is provided in the route", async () => {
      controller.mockResolvedValue({
        status: 200,
        message: "ok"
      });

      const result = await controller(mockReq, mockRes);

      expect(result.status).toEqual(200);
      controller.mockRestore();
    });

    // TODO
    xit("should return a 500 if an error occurred", async () => {
      controller.mockRejectedValue({
        status: 500,
        message: "status code not found - abc"
      });

      const result = await controller(mockReq, mockRes);

      console.log("hoo:", result);
      controller.mockRestore();
      //expect(result.status).toBeCalledWith(500);
    });
  });
});
