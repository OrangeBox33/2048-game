function color (value) {
  if (!value) return;
  let color;
  switch (value) {
    case 2: {
      color = [240, 240];
      break;
    }
    case 4: {
      color = [228.5, 217.5];
    break;
    }
    case 8: {
      color = [216.8, 195];
    break;
    }
    case 16: {
      color = [205.2, 172.5];
    break;
    }
    case 32: {
      color = [193.6, 150];
    break;
    }
    case 64: {
      color = [182, 127.5];
    break;
    }
    case 128: {
      color = [170.4, 105];
    break;
    }
    case 256: {
      color = [158.8, 60];
    break;
    }
    case 512: {
      color = [147.2, 37.5];
    break;
    }
    case 1024: {
      color = [135.6, 37.5];
    break;
    }
    case 2048: {
      color = [124, 15];
    break;
    }
    default: break;
  }
  return color;
}

export default color;