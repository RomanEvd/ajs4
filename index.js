export default function healthColor({ name, health }) {
    let color;
    if (health > 50) {
      color = 'healthy';
    } else if (health < 15) {
      color = 'critical';
    } else color = 'wounded';
    return color;
  }