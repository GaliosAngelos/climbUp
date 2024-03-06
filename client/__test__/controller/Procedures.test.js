import axios from "axios";
import { Hall_Owner, Climber } from "../../Controller/Procedures";

describe("Hall Owner Functions", () => {
  beforeEach(() => {
    axios.post = jest.fn().mockResolvedValue({ status: 200, data: "Success" });
  });

  // Test Case 1: create_climbing_hall_and_owner
  it("should create climbing hall and owner successfully", async () => {
    const response = await Hall_Owner.create_climbing_hall_and_owner();
    expect(axios.post).toHaveBeenCalledWith(
      "http://35.193.105.8:3000/login_hallowner",
      { params: Hall_Owner.create_climbing_hall_and_owner.values }
    );
    expect(response.status).toBe(200);
    expect(response.data).toBe("Success");
  });
});

describe("Climber Functions", () => {
  beforeEach(() => {
    axios.post = jest.fn().mockResolvedValue({ status: 200, data: "Success" });
  });

  // Test Case 1: register_climber
  it("should register climber successfully", async () => {
    const response = await Climber.register_climber();
    expect(axios.post).toHaveBeenCalledWith(
      "http://35.193.105.8:3000/login_climber",
      { params: Climber.register_climber.values }
    );
    expect(response.status).toBe(200);
    expect(response.data).toBe("Success");
  });
});