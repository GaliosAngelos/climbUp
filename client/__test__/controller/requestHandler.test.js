import axios from "axios";

describe("Query Function", () => {
  beforeEach(() => {
    axios.post = jest.fn().mockResolvedValue({ status: 200, data: "Success" });
  });

  // Test Case: query
  it("should execute query successfully", async () => {
    const queryText = "some_query";
    const params = "some_params";
    const response = await axios.query(queryText, params);
    const expectedRequest = { query: queryText, params: params };
    expect(axios.post).toHaveBeenCalledWith(
      "http://35.193.105.8:3000/query",
      expectedRequest
    );
    expect(response.status).toBe(200);
    expect(response.data).toBe("Success");
  });
});
