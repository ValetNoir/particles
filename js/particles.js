const GRAVITY = new Vector3(0, -1, 0);

class Vector3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(v1, v2) {
    return new Vector3(
      v1.x + v2.x,
      v1.y + v2.y,
      v1.z + v2.z
    );
  }

  mult(v, k) {
    return new Vector3(
      v.x * k,
      v.y * k,
      v.z * k
    );
  }
  
  div(v, k) {
    return this.mult(v, 1 / k);
  }
}

class Particle {
  constructor(position, mass) {
    this.position = position;
    this.velocity = new Vector3(0, 0, 0);
    this.acceleration = new Vector3(0, 0, 0);

    this.mass = mass;
  }
}

class PhysicsWorld {
  constructor() {
    this.objects = [];
  }

  addObject(obj) {
    this.objects.push(obj);
  }

  removeObject(index) {
    this.objects.splice(index, 1);
  }

  step(dt) {
    for(let i = 0; i < this.objects.length; i++) {
      // apply gravity
      this.objects[i].acceleration = Vector3.add(this.objects[i].acceleration, Vector3.mult(GRAVITY, this.objects[i].mass));

      this.objects[i].velocity = Vector3.add(this.objects[i].velocity, Vector3.mult(Vector3.div(this.objects[i].acceleration, this.objects[i].mass), dt));
      this.objects[i].position = Vector3.add(this.objects[i].position, Vector3.mult(this.objects[i].velocity, dt));

      this.objects[i].acceleration = new Vector3(0, 0, 0);
    }
  }
}