import axios from ("axios").default;
import { logout } from "../../Controller/logoutHandler";

// Test Case 1: logout functionsvc   
describe("logout function", () => {
  // Preparation
  beforeEach(() => {
    axios.post = jest.fn().mockResolvedValue({ status: 200, data: "Logout successful" });
  });

  // Action & Expected Result
  it("should logout successfully", async () => {
    const query = { userId: "123" };
    const response = await logout(query);
    expect(axios.post).toHaveBeenCalledWith("http://35.193.105.8:3000/logout", query);
    expect(response.status).toBe(200);
    expect(response.data).toBe("Logout successful");
  });
});