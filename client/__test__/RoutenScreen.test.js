import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import RoutenScreen from "../navigation/RoutenScreen";
import { query } from "../components/request/generalRequest";
import { Climber } from "../components/request/Procedures";

// Mock der `query` Funktion, die simulierte Daten zurückgibt
jest.mock("../components/request/generalRequest", () => ({
  query: jest.fn(),
}));

describe("RoutenScreen", () => {
  beforeEach(() => {
    // Setzt den Mock vor jedem Test zurück
    query.mockClear();
  });

  it("ruft Routen entsprechend der Halle (testhall2) ab", async () => {
    // Erwartete Mock-Daten, die von der Datenbank zurückgegeben werden
    const mockRoutesData = [
      {
        route_name: "Lizard_Path",
        climbingHallName: "testhall2",
        Sector: "B",
        LevelOfDifficulty: "5.9",
        color: "blue",
        lineNumber: "002",
        numberOfAttempts: 1,
        madeIt: true,
      },
      // Weitere Routen hier hinzufügen
    ];

    // Konfiguriere die `query` Mock-Funktion, um die erwarteten Daten zurückzugeben
    query.mockResolvedValueOnce({ data: mockRoutesData });

    // Render die RoutenScreen Komponente mit Mock-Navigation und Route-Props
    const { getByText } = render(
      <RoutenScreen
        navigation={{ navigate: jest.fn() }}
        route={{ params: { hall_name: "testhall2" } }}
      />
    );

    // Warte darauf, dass die Route "Lizard_Path" im Dokument erscheint
    await waitFor(() => {
      expect(getByText("Lizard_Path")).toBeTruthy();
    });

    // Überprüfe, ob die `query` Funktion mit den korrekten Parametern aufgerufen wurde
    expect(query).toHaveBeenCalledWith(Climber.get_routes_by_hall_name.call, [
      "testhall2",
    ]);
  });
});
