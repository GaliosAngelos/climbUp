import axios from "axios";
import { loginClimber,loginHallowner } from "../../Controller/loginHander";

jest.mock("axios");

describe("loginClimber function", () => {
  it("sends climber login request correctly", async () => {
    // Preparation
    const params = { username: "climber", password: "password123" };
    axios.post.mockResolvedValue({ data: { token: "climberToken" }, status: 200 });
    // Action
    const response = await loginClimber(params);

    // Expected Result
    expect(response.status).toBe(200);
    expect(response.data.token).toBe("climberToken");
  });

  it("handles errors when sending climber login request", async () => {
    // Preparation
    const params = { username: "climber", password: "password123" };
    axios.post.mockRejectedValue({ response: { status: 401 }, message: "Unauthorized" });

    // Action
    const response = await loginClimber(params);

    // Expected Result
    expect(response.status).toBe(401);
    expect(response.data.message).toBe("Unauthorized");
  });
});

describe("loginHallowner function", () => {
  it("sends hallowner login request correctly", async () => {
    // Preparation
    const params = { username: "hallowner", password: "password456" };
    axios.post.mockResolvedValue({ data: { token: "hallownerToken" }, status: 200 });

    // Action
    const response = await loginHallowner(params);

    // Expected Result
    expect(response.status).toBe(200);
    expect(response.data.token).toBe("hallownerToken");
  });

  it("handles errors when sending hallowner login request", async () => {
    // Preparation
    const params = { username: "hallowner", password: "password456" };
    axios.post.mockRejectedValue({ response: { status: 500 }, message: "Internal Server Error" });

    // Action
    const response = await loginHallowner(params);

    // Expected Result
    expect(response.status).toBe(500);
    expect(response.data.message).toBe("Internal Server Error");
  });
});