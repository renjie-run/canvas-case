class Vector {

  constructor(x, y) {
    this.x = x || 0;
		this.y = y || 0;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  rotate(theta) {
    this.x = Math.cos(theta) * this.x - Math.sin(theta) * this.y;
    this.y = Math.sin(theta) * this.x + Math.cos(theta) * this.y;
    return this;
  }

  mult() {
    this.x *= f;
    this.y *= f;
    return this;
  }
}

class Leaf {

  constructor(point, radius, color, ctx) {
    this.point = point || null;
		this.radius = radius || 0;
		this.color = color || 'rgba(255, 255, 255, 1)';
		this.ctx = ctx;
  }

  render() {
    const ctx = this.ctx;
    for (let i = 0; i < 5; i++) {
      ((radius) => {
        setTimeout(() => {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(this.point.x, this.point.y);
          ctx.arc(this.point.x, this.point.y, radius, 0, Branch.circle, true);
          ctx.fill();
        }, radius * 60);
      })(i);
    }
  }
}

class Branch {

  constructor(point, v, radius, color, tree) {
    this.point = point || null;
		this.v = v || null;
		this.radius = radius || 0;
		this.length = 0;
		this.generation = 1;
		this.tree = tree || null;
		this.color = color || 'rgba(255, 255, 255, 1)';

		this.register();
  }

  register() {
    this.tree.addBranch(this);
  }

  draw() {
    const ctx = this.tree.ctx;
		ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(this.point.x, this.point.y);
    ctx.arc(this.point.x, this.point.y, this.radius, 0, Branch.circle, true);
    ctx.fill();
  }

  modify() {
    const angle = 0.18 - (0.10 / this.generation);
    this.point.add(this.v);
    this.length += this.v.length();
    this.radius *= 0.99;
    this.v.rotate(Branch.random(-angle, angle));
    if (this.radius < 0.8 || this.generation > 10) {
      this.tree.removeBranch(this);
      const leaf = new Leaf(this.point, 10, this.color, this.tree.ctx);
      leaf.render();
    }
  }

  fork() {
    const p = this.length - Branch.random(100, 200);
    if (p > 0) {
      const n = Math.round(Branch.random(1, 3));
      this.tree.stat.fork += n - 1;
      for (let i = 0; i < n; i++) {
        Branch.clone(this);
      }

      this.tree.removeBranch(this);
    }
  }

  grow() {
    this.draw();
    this.modify();
    this.fork();
  }
}

Branch.circle = 2 * Math.PI;
Branch.random = (min, max) => {
  return Math.random() * (max - min) + min;
};
Branch.clone = (branch) => {
  let nextBranch = new Branch(new Vector(branch.point.x, branch.point.y), new Vector(branch.v.x, branch.v.y), branch.radius, branch.color, branch.tree);
  nextBranch.generation = branch.generation + 1;
  return nextBranch;
};
Branch.rgba = (r, g, b, a) => {
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};
Branch.randomrgba = (min, max, a) => {
  return Branch.rgba(Math.round(Branch.random(min, max)), Math.round(Branch.random(min, max)), Math.round(Branch.random(min, max)), a);
};

class Tree {

  constructor() {
    this.branches = [];
    this.timer = null;
    this.stat = {
      fork: 0,
      length: 0,
    };
  }

  addBranch(branch) {
    this.branches.push(branch);
  }

  removeBranch(branch) {
    const branchIndex = this.branches.findIndex((currBranch) => currBranch === branch);
    if (branchIndex < 0) {
      return;
    }
    this.branches.splice(branchIndex, 1);
  }

  render() {
    this.timer = setInterval(() => {
      if (this.branches.length > 0) {
        for (let i = 0; i < this.branches.length; i++) {
          this.branches[i].grow();
        }
      }
    }, 1000 / 30);
  }

  init(ctx) {
    this.ctx = ctx;
  }

  abort() {
    this.branches = [];
    this.stat = {
      fork: 0,
      length: 0,
    };
  }
}

const growingTree = ({ canvas, canvasWrapper }) => {
  if (!canvasWrapper) {
    return;
  }
  const canvasWidth = canvasWrapper.offsetWidth;
  const canvasHeight = canvasWrapper.offsetHeight;
  const centerX = canvasWidth / 2;
  const stretchFactor = 600 / canvasHeight;
  const ySpeed = 3 / stretchFactor;

  canvas.width = canvasWidth;
	canvas.height = canvasHeight;
  canvas.style.backgroundColor = '#000';

	const ctx = canvas.getContext('2d');
	ctx.globalCompositeOperation = 'lighter';

  const tree = new Tree();
  tree.init(ctx);
  for (let i = 0; i < 3; i++) {
    new Branch(new Vector(centerX, canvasHeight), new Vector(Math.random(-1, 1), -ySpeed), 15 / stretchFactor, Branch.randomrgba(0, 255, 0.3), tree);
  }
  tree.render();
};

export {
  growingTree,
};
