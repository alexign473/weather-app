const imageByCode = (code) => {
  switch (code) {
    case 1000:
      return 'Clear';
    case 1003:
    case 1006:
    case 1030:
      return 'LightCloud';

    case 1009:
      return 'HeavyCloud';
    case 1150:
    case 1153:
    case 1183:
      return 'LightRain';
    case 1189:
    case 1192:
    case 1195:
      return 'HeavyRain';
    case 1063:
    case 1180:
    case 1186:
    case 1240:
    case 1243:
    case 1246:
      return 'Shower';
    case 1069:
    case 1168:
    case 1198:
    case 1201:
    case 1204:
    case 1207:
    case 1249:
    case 1252:
      return 'Sleet';
    case 1114:
    case 1117:
    case 1210:
    case 1213:
    case 1216:
    case 1255:
      return 'Snow';
    case 1219:
    case 1225:
    case 1237:
    case 1258:
    case 1261:
    case 1264:
      return 'Hail';
    case 1087:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      return 'Thunderstorm';

    default:
      return false;
  }
};

export { imageByCode };
