const controller = require("../controller");

describe("status-codes-by-type__get", () => {
  let mockReq;
  let mockRes;
  let mockSuccessResponse;
  let mockNotFoundResponse;
  let mockErrorResponse;

  beforeEach(async () => {
    mockReq = {
      axios: {
        get: jest.fn()
      },
      params: {}
    };

    mockRes = {
      send: jest.fn(),
      status: jest.fn()
    };

    mockErrorResponse = {
      status: 500,
      message: "statuses not found"
    };
    mockNotFoundResponse = {
      status: 404,
      message: "statuses not found"
    };

    mockSuccessResponse = [
      {
        code: "1xx",
        phrase: "**Informational**",
        description:
          '"indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response." ~ [sure](http://www.urbandictionary.com/define.php?term=sure)',
        spec_title: "RFC7231#6.2",
        spec_href: "https://tools.ietf.org/html/rfc7231#section-6.2"
      },
      {
        code: "100",
        phrase: "Continue",
        description:
          '"indicates that the initial part of a request has been received and has not yet been rejected by the server."',
        spec_title: "RFC7231#6.2.1",
        spec_href: "https://tools.ietf.org/html/rfc7231#section-6.2.1"
      },
      {
        code: "101",
        phrase: "Switching Protocols",
        description:
          '"indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection."',
        spec_title: "RFC7231#6.2.2",
        spec_href: "https://tools.ietf.org/html/rfc7231#section-6.2.2"
      }
    ];
  });

  afterEach(() => {
    jest.unmock();
  });

  describe("valid request for all status codes", () => {
    it("should return a 200 when a status code object is found by http status code", async () => {
      mockReq.axios.get.mockResolvedValue(mockSuccessResponse);

      mockReq.params.id = "1";
      await controller(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(200);
    });

    it("should return a 404 when the status code provided is not found", async () => {
      mockReq.axios.get.mockResolvedValue(mockNotFoundResponse);

      await controller(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(404);
    });

    it("should return a 500 if an error occurred", async () => {
      mockReq.axios.get.mockRejectedValue(mockErrorResponse);
      mockReq.params = null;

      await controller(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(500);
    });
  });
});
