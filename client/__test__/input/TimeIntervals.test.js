import calculateTimeStamps from '../../components/input/calculateTimestamps';

describe('calculateTimeStamps function', () => {
  it('correctly calculates timestamps for last day', () => {
    const { past, now } = calculateTimeStamps('lastDay');
    const pastDate = new Date(past);
    const nowDate = new Date(now);
    
    expect(nowDate.getTime() - pastDate.getTime()).toBe(24 * 60 * 60 * 1000);
  });

  it('correctly calculates timestamps for last week', () => {
    const { past, now } = calculateTimeStamps('lastWeek');
    const pastDate = new Date(past);
    const nowDate = new Date(now);
    
    expect(nowDate.getTime() - pastDate.getTime()).toBe(7 * 24 * 60 * 60 * 1000);
  });

  it('correctly calculates timestamps for last month', () => {
    const { past, now } = calculateTimeStamps('lastMonth');
    const pastDate = new Date(past);
    const nowDate = new Date(now);
    
    expect(nowDate.getTime() - pastDate.getTime()).toBeGreaterThan(28 * 24 * 60 * 60 * 1000);
  });

  it('correctly calculates timestamps for last year', () => {
    const { past, now } = calculateTimeStamps('lastYear');
    const pastDate = new Date(past);
    const nowDate = new Date(now);
    
    expect(nowDate.getTime() - pastDate.getTime()).toBeGreaterThan(365 * 24 * 60 * 60 * 1000);
  });

  it('correctly calculates timestamps for default case', () => {
    const { past, now } = calculateTimeStamps();
    const pastDate = new Date(past);
    const nowDate = new Date(now);
    
    expect(nowDate.getTime() - pastDate.getTime()).toBe(7 * 24 * 60 * 60 * 1000);
  });
});