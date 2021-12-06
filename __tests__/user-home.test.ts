import userHomeOrTemp from '../src/index';

jest.mock('../src/index');
const mockedUserHomeOrTemp = userHomeOrTemp as jest.MockedFunction<typeof userHomeOrTemp>;

describe('userHomeOrTemp', () => {
  it('should return user home directory if exist', async () => {
    const dir = await userHomeOrTemp();

    if (dir) {
      expect(dir).toMatch(/^[\\|\/]Users[\/|\\].+/);
    }
  });

  it('should return undefined if home director not exist and temp is false', async () => {
    mockedUserHomeOrTemp.mockResolvedValue(undefined);
    const dir = await mockedUserHomeOrTemp();

    expect(dir).toBeUndefined();
  });

  it('should return temp directory if home director not exist and temp is true', async () => {
    mockedUserHomeOrTemp.mockResolvedValue("\\Users\\paths\\Temp"); // at window
    const dir = await mockedUserHomeOrTemp(true);

    expect(dir).toBe('\\Users\\paths\\Temp');
  });
});
