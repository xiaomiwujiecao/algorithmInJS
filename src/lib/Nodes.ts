export class Nodes {
  private tree: Nodes
  private data: number
  private left: Nodes
  private right: Nodes

  constructor(data: number) {
    this.data = data
  }

  public find(data: number) {
    let p: Nodes = this.tree
    while (p != null) {
      if (data < p.data) {
        p = p.left
      }
      else if (data > p.data) {
        p = p.right
      }
      else return p

    }
    return null
  }

  public insert(data: number): void {
    if (!this.tree) {
      this.tree = new Nodes(data)
      return
    }
    let p = this.tree
    if (data > p.data) {
      if (!p.right) {
        p.right = new Nodes(data)
        return
      }
      p = p.right
    }
    else {
      if (!p.left) {
        p.left = new Nodes(data)
        return
      }
      p = p.left
    }
  }

  public delete(data: number): void {
    let p: Nodes = this.tree
    let pp = null
    while (!p && p.data != data) {
      pp = p
      if (data > p.data) {
        p = p.right

      }
      else {
        p = p.left
      }

      if (!p) {
        return
      }
    }

    if (!p.left && p.right) {
      let minP: Nodes = p.right
      let minPP: Nodes = p
      while (minP.left != null) {
        minPP = minP
        minPP = minP.left
      }
      p.data = minP.data
      p = minP
      pp = minPP
    }

    let child: Nodes
    if (p.left) {
      child = p.left
    }
    else if (p.right) {
      child = p.right
    }
    else {
      child = null
    }

    if (!pp) {
      this.tree = child
    }
    else if (pp.left == p) {
      pp.left = child
    }
    else {
      pp.right = child
    }
  }
}

