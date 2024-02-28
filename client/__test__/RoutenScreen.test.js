/*import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import RoutenScreen from '../navigation/RoutenScreen';
import { Climber } from '../components/request/Procedures'; // Stelle sicher, dass dieser Pfad korrekt ist
import { query } from '../components/request/generalRequest';

// Mock der Navigation und Route
const mockNavigate = jest.fn();
const mockRoute = {
    params: {
        hall_name: 'testhall2'
    }
};

// Mock-Daten für Routen, angepasst mit gültigem Farbformat
const mockRoutesData = [
    {
        routeName: "Lizard_Path",
        climbingHallName: "DAV Kletterzentrum Augsburg",
        Sector: "B",
        LevelOfDifficulty: "5.9",
        color: "blue", // geändert zu einem gültigen Farbformat
        lineNumber: "002",
        numberOfAttempts: 1,
        madeIt: true,
    },
    // Weitere Routen können hier bei Bedarf hinzugefügt werden
];

// Mock der query Funktion
jest.mock('../components/request/generalRequest', () => ({
    query: jest.fn()
}));

describe('RoutenScreen useEffect and query', () => {
    beforeEach(() => {
        query.mockClear();
        mockNavigate.mockClear();
        query.mockResolvedValue({ data: mockRoutesData });
    });

    it('fetches routes based on hall_name and updates state', async () => {
        query.mockResolvedValueOnce({ data: mockRoutesData });

        const { findByText } = render(
            <RoutenScreen navigation={{ navigate: mockNavigate }} route={mockRoute} />
        );

        // Warte darauf, dass die Route "Lizard_Path" im Dokument erscheint
        await waitFor(() => {
            expect(findByText('Lizard_Path')).toBeTruthy();
        });

        // Überprüfe, ob die query Funktion mit den erwarteten Argumenten aufgerufen wurde
        expect(query).toHaveBeenCalledWith(Climber.get_routes_by_hall_name.call, ['testhall2']);
    });
});
*/

//v2
/*
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import RoutenScreen from '../navigation/RoutenScreen'; // Stelle sicher, dass dieser Pfad korrekt ist
import { Climber } from '../components/request/Procedures'; // Stelle sicher, dass dieser Pfad korrekt ist
import { query } from '../components/request/generalRequest'; // Stelle sicher, dass dieser Pfad korrekt ist

// Mock der Navigation und Route
const mockNavigate = jest.fn();
const mockRoute = {
    params: {
        hall_name: 'testhall2'
    }
};

// Mock-Daten für Routen, angepasst mit gültigem Farbformat
const mockRoutesData = [
    {
        routeName: "Lizard_Path",
        climbingHallName: "DAV Kletterzentrum Augsburg",
        Sector: "B",
        LevelOfDifficulty: "5.9",
        color: "blue", // geändert zu einem gültigen Farbformat
        lineNumber: "002",
        numberOfAttempts: 1,
        madeIt: true,
    },
    // Weitere Routen können hier bei Bedarf hinzugefügt werden
];

// Mock der query Funktion
jest.mock('../components/request/generalRequest', () => ({
    query: jest.fn()
}));

describe('RoutenScreen useEffect and query', () => {
    beforeEach(() => {
        query.mockClear();
        mockNavigate.mockClear();
        query.mockResolvedValue({ data: mockRoutesData });
    });

    it('fetches routes based on hall_name and updates state', async () => {
        query.mockResolvedValueOnce({ data: mockRoutesData });

        const { findByText } = render(
            <RoutenScreen navigation={{ navigate: mockNavigate }} route={mockRoute} />
        );

        // Warte darauf, dass die Route "Lizard_Path" im Dokument erscheint
        await waitFor(() => {
            expect(findByText('Lizard_Path')).toBeTruthy();
        });

        // Überprüfe, ob die query Funktion mit den erwarteten Argumenten aufgerufen wurde
        expect(query).toHaveBeenCalledWith(Climber.get_routes_by_hall_name.call, ['testhall2']);
    });
});*/
/*
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import RoutenScreen from '../navigation/RoutenScreen';
import { Climber } from '../components/request/Procedures';
import { query } from '../components/request/generalRequest';

// Mock der Navigation und Route
const mockNavigate = jest.fn();
const mockRoute = {
    params: {
        hall_name: 'testhall2'
    }
};

// Mock-Daten für Routen
const mockRoutesData = [
    {
        routeName: "Lizard_Path",
        climbingHallName: "DAV Kletterzentrum Augsburg",
        Sector: "B",
        LevelOfDifficulty: "5.9",
        color: "blue",
        lineNumber: "002",
        numberOfAttempts: 1,
        madeIt: true,
    },
    // Füge bei Bedarf weitere Routen hinzu
];

// Mock der query Funktion
jest.mock('../components/request/generalRequest', () => ({
    query: jest.fn()
}));

describe('RoutenScreen useEffect and query', () => {
    beforeEach(() => {
        query.mockClear();
        mockNavigate.mockClear();
        query.mockResolvedValue({ data: mockRoutesData });
    });

    it('fetches routes based on hall_name and updates state', async () => {
        try {
            query.mockResolvedValueOnce({ data: mockRoutesData });

            const { findByText } = render(
                <RoutenScreen navigation={{ navigate: mockNavigate }} route={mockRoute} />
            );

            // Warte darauf, dass die Route "Lizard_Path" im Dokument erscheint
            await waitFor(() => {
                expect(findByText('Lizard_Path')).resolves.toBeTruthy();
            });

            // Überprüfe, ob die query Funktion mit den erwarteten Argumenten aufgerufen wurde
            expect(query).toHaveBeenCalledWith(Climber.get_routes_by_hall_name.call, ['testhall2']);
        } catch (error) {
            console.log('Fehler im Test: ', error);
            throw error; // Lasse den Fehler weiterhin den Test fehlschlagen
        }
    });
});
*/
import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react-native';
import RoutenScreen from '../navigation/RoutenScreen';
import { query } from '../components/request/generalRequest';

// Mock der Navigation und Route
const mockNavigate = jest.fn();
const mockRoute = {
    params: {
        hall_name: 'testhall2'
    }
};

// Mock-Daten für Routen, angepasst mit gültigem Farbformat
const mockRoutesData = [
    {
        routeName: "Lizard_Path",
        climbingHallName: "DAV Kletterzentrum Augsburg",
        Sector: "B",
        LevelOfDifficulty: "5.9",
        color: "blue",
        lineNumber: "002",
        numberOfAttempts: 1,
        madeIt: true,
    },
    // Weitere Routen können hier bei Bedarf hinzugefügt werden
];

// Mock der query Funktion
jest.mock('../components/request/generalRequest', () => ({
    query: jest.fn()
}));

describe('RoutenScreen useEffect and query', () => {
    beforeEach(() => {
        query.mockClear();
        mockNavigate.mockClear();
        query.mockResolvedValue({ data: mockRoutesData });
    });

    it('fetches routes based on hall_name and updates state', async () => {
        query.mockResolvedValueOnce({ data: mockRoutesData });

        const { findByText } = render(
            <RoutenScreen navigation={{ navigate: mockNavigate }} route={mockRoute} />
        );

        // Warte darauf, dass die Route "Lizard_Path" im Dokument erscheint
        await waitFor(() => {
            expect(findByText('Lizard_Path')).toBeTruthy();
        });

        // Überprüfe, ob die query Funktion mit den erwarteten Argumenten aufgerufen wurde
        expect(query).toHaveBeenCalledWith("SELECT * FROM climbup.get_routes_details_by_hall_name2($1)", ['testhall2']);
    });
});

