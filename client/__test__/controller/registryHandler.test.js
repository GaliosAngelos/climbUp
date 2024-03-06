import axios from "axios";
import { registerClimber, registerHallowner } from "../../Controller/registryHandler";

describe("Register Functions", () => {
  beforeEach(() => {
    axios.post = jest.fn().mockResolvedValue({ status: 200, data: "Success" });
  });

  // Test Case 1: registerClimber
  it("should register climber successfully", async () => {
    const query = "some_query";
    const params = "some_params";
    const response = await registerClimber(query, params);
    expect(axios.post).toHaveBeenCalledWith(
      "http://35.193.105.8:3000/register_climber",
      { query: query, params: params }
    );
    expect(response.status).toBe(200);
    expect(response.data).toBe("Success");
  });

  // Test Case 2: registerHallowner
  it("should register hall owner successfully", async () => {
    const query = "some_query";
    const params = "some_params";
    const response = await registerHallowner(query, params);
    expect(axios.post).toHaveBeenCalledWith(
      "http://35.193.105.8:3000/register_hallowner",
      { query: query, params: params }
    );
    expect(response.status).toBe(200);
    expect(response.data).toBe("Success");
  });
});
