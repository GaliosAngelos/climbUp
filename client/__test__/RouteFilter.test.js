// import React from "react";
// import { fireEvent, render } from "@testing-library/react-native";
// import RouteFilter from "../components/sections/dashboard/climbing/RouteFilter";
// import { query } from "../components/request/generalRequest";

// // Mock der `query` Funktion
// jest.mock("../components/request/generalRequest", () => ({
//   query: jest.fn(),
// }));

// describe("RouteFilter", () => {
//   const setRoutes = jest.fn(); // Mock-Funktion für setRoutes
//   const mockRouteData = [
//     {
//       route_name: "Lizard_Patha",
//       hall_name: "testhall2",
//       sector: "B",
//       level_of_difficulty: "5.9",
//       color: "blue",
//       line_number: "002",
//       tilt: true,
//     },
//   ];

//   beforeEach(() => {
//     query.mockClear();
//     setRoutes.mockClear();
//     query.mockResolvedValue({ data: mockRouteData }); // Simuliere die Antwort von `query`
//   });

//   it("sollte eine Route basierend auf dem Routennamen finden", async () => {
//     const { getByText, getByPlaceholderText } = render(
//       <RouteFilter setRoutes={setRoutes} />
//     );

//     const routeInput = getByPlaceholderText("Route");
//     fireEvent.changeText(routeInput, "Snake_Route"); // Simuliere die Eingabe

//     // Hier könnte man auch eine Wartezeit einbauen, falls die Abfrage asynchron ist
//     await new Promise((resolve) => setTimeout(resolve, 0)); // Kurze Pause, um den asynchronen Code abzuschließen

//     // Überprüfen, ob `setRoutes` mit den erwarteten Daten aufgerufen wurde
//     expect(setRoutes).toHaveBeenCalledWith(mockRouteData);
//   });
// });

// import React from "react";
// import { render, act } from "@testing-library/react-native";
// import RouteFilter from "../components/sections/dashboard/climbing/RouteFilter"; // Pfad aktualisieren
// import { query } from "../components/request/generalRequest";

// // Mock der `query`-Funktion
// jest.mock("../components/request/generalRequest", () => ({
//   query: jest.fn(),
// }));

// describe("RouteFilter useEffects", () => {
//   const mockSetRoutes = jest.fn();

//   beforeEach(() => {
//     mockSetRoutes.mockClear();
//     query.mockClear();
//   });

//   it('sollte eine Route für route_name: "Lizard_Path" zurückgeben', async () => {
//     const mockRouteDataForName = [{ id: 1, route_name: "Lizard_Path" }];
//     query.mockResolvedValueOnce({ data: mockRouteDataForName });

//     render(<RouteFilter setRoutes={mockSetRoutes} />);

//     await act(async () => {
//       query.mock.calls[0][1][0]("Lizard_Path");
//     });

//     expect(query).toHaveBeenCalledWith(Climber.get_routes_by_route_name.call, [
//       "Lizard_Path",
//     ]);
//     expect(mockSetRoutes).toHaveBeenCalledWith(mockRouteDataForName);
//   });

//   it('sollte 3 Routen für sector: "A" zurückgeben', async () => {
//     const mockRouteDataForSector = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Beispiel-IDs
//     query.mockResolvedValueOnce({ data: mockRouteDataForSector });

//     render(<RouteFilter setRoutes={mockSetRoutes} />);

//     await act(async () => {
//       query.mock.calls[0][1][0]("A");
//     });

//     expect(query).toHaveBeenCalledWith(Climber.get_routes_by_sector.call, [
//       "A",
//     ]);
//     expect(mockSetRoutes).toHaveBeenCalledWith(mockRouteDataForSector);
//   });

//   it('sollte 2 Routen für level: "5.11" zurückgeben', async () => {
//     const mockRouteDataForLevel = [{ id: 4 }, { id: 5 }]; // Beispiel-IDs
//     query.mockResolvedValueOnce({ data: mockRouteDataForLevel });

//     render(<RouteFilter setRoutes={mockSetRoutes} />);

//     await act(async () => {
//       query.mock.calls[0][1][0]("5.11");
//     });

//     expect(query).toHaveBeenCalledWith(Climber.get_routes_by_difficulty.call, [
//       "5.11",
//     ]);
//     expect(mockSetRoutes).toHaveBeenCalledWith(mockRouteDataForLevel);
//   });
// });

// import React from "react";
// import { render, act } from "@testing-library/react-native";
// import RouteFilter from "../components/sections/dashboard/climbing/RouteFilter";
// import { query } from "../components/request/generalRequest";
// import { Climber } from "../components/request/Procedures"; // Stelle sicher, dass dieser Import korrekt ist

// // Mock der `query`-Funktion
// jest.mock("../components/request/generalRequest", () => ({
//   query: jest.fn(),
// }));

// describe("RouteFilter useEffects", () => {
//   const mockSetRoutes = jest.fn();

//   beforeEach(() => {
//     mockSetRoutes.mockClear();
//     query.mockClear();
//   });

//   it('sollte eine Route für route_name: "Lizard_Path" zurückgeben', async () => {
//     const mockRouteDataForName = [
//       { route_name: "Lizard_Path", sector: "B", level: "5.10" },
//     ];
//     query.mockResolvedValueOnce({ data: mockRouteDataForName });

//     const { getByPlaceholderText } = render(
//       <RouteFilter setRoutes={mockSetRoutes} />
//     );

//     // Simuliere das Eingeben des Routennamens
//     act(() => {
//       fireEvent.changeText(getByPlaceholderText("Route"), "Lizard_Path");
//     });

//     expect(query).toHaveBeenCalledWith(Climber.get_routes_by_route_name.call, [
//       "Lizard_Path",
//     ]);
//     expect(mockSetRoutes).toHaveBeenCalledWith(mockRouteDataForName);
//   });

//   it('sollte 3 Routen für sector: "A" zurückgeben', async () => {
//     const mockRouteDataForSector = [
//       { route_name: "Route 1", sector: "A", level: "5.8" },
//       { route_name: "Route 2", sector: "A", level: "5.9" },
//       { route_name: "Route 3", sector: "A", level: "5.10" },
//     ];
//     query.mockResolvedValueOnce({ data: mockRouteDataForSector });

//     const { getByPlaceholderText } = render(
//       <RouteFilter setRoutes={mockSetRoutes} />
//     );

//     // Simuliere das Eingeben des Sektors
//     act(() => {
//       fireEvent.changeText(getByPlaceholderText("Sektor"), "A");
//     });

//     expect(query).toHaveBeenCalledWith(Climber.get_routes_by_sector.call, [
//       "A",
//     ]);
//     expect(mockSetRoutes).toHaveBeenCalledWith(mockRouteDataForSector);
//   });

//   it('sollte 2 Routen für level: "5.11" zurückgeben', async () => {
//     const mockRouteDataForLevel = [
//       { route_name: "Hard Route 1", sector: "C", level: "5.11" },
//       { route_name: "Hard Route 2", sector: "D", level: "5.11" },
//     ];
//     query.mockResolvedValueOnce({ data: mockRouteDataForLevel });

//     const { getByPlaceholderText } = render(
//       <RouteFilter setRoutes={mockSetRoutes} />
//     );

//     // Simuliere das Eingeben des Schwierigkeitsgrads
//     act(() => {
//       fireEvent.changeText(getByPlaceholderText("Level"), "5.11");
//     });

//     expect(query).toHaveBeenCalledWith(Climber.get_routes_by_difficulty.call, [
//       "5.11",
//     ]);
//     expect(mockSetRoutes).toHaveBeenCalledWith(mockRouteDataForLevel);
//   });
// });

const { Pool } = require("pg");

// Konfiguriere den Pool mit deinen Testdatenbank-Details
const pool = new Pool({
  user: "deinUsername",
  host: "localhost",
  database: "deineTestDatenbank",
  password: "deinPasswort",
  port: 5432,
});

async function fetchRoutesFromDB(sector) {
  const res = await pool.query("SELECT * FROM routes WHERE sector = $1", [
    sector,
  ]);
  return res.rows;
}

describe("fetchRoutesFromDB Integrationstest", () => {
  afterAll(async () => {
    await pool.end(); // Schließe die Verbindung am Ende der Tests
  });

  it("sollte die korrekte Anzahl von Routen für einen gegebenen Sektor zurückgeben", async () => {
    // Angenommen, du weißt, dass Sektor "A" 3 Routen in deiner Testdatenbank hat
    const sector = "A";
    const expectedRoutesCount = 3;

    const routes = await fetchRoutesFromDB(sector);

    expect(routes.length).toBe(expectedRoutesCount);
    // Optional: Weitere Überprüfungen zu den zurückgegebenen Routendaten
  });
});
