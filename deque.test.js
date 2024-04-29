const Deque = require("./deque");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("addFront", function() {
  it("places the value at the front of the deque and returns undefined", function() {
    expect(deque.addFront(10)).toBe(undefined);
    expect(deque.peekFront()).toBe(10);
    expect(deque.peekBack()).toBe(10);
    deque.addFront(100);
    expect(deque.peekFront()).toBe(100);
    expect(deque.peekBack()).toBe(10);
    deque.addFront(1000);
    expect(deque.peekFront()).toBe(1000);
    expect(deque.peekBack()).toBe(10);
  });
});

describe("addBack", function() {
  it("places the value at the back of the deque and returns undefined", function() {
    expect(deque.addBack(10)).toBe(undefined);
    expect(deque.peekFront()).toBe(10);
    expect(deque.peekBack()).toBe(10);
    deque.addBack(100);
    expect(deque.peekFront()).toBe(10);
    expect(deque.peekBack()).toBe(100);
    deque.addBack(1000);
    expect(deque.peekFront()).toBe(10);
    expect(deque.peekBack()).toBe(1000);
  });
});

describe("removeFront", function() {
  it("removes and returns the value from the front of the deque", function() {
    deque.addFront(10);
    deque.addFront(100);
    deque.addFront(1000);
    let removed = deque.removeFront();
    expect(removed).toBe(1000);
    expect(deque._list.size).toBe(2);
    removed = deque.removeFront();
    expect(removed).toBe(100);
    removed = deque.removeFront();
    expect(removed).toBe(10);
    expect(deque._list.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.removeFront()).toThrow(Error);
  });
});

describe("removeBack", function() {
  it("removes and returns the value from the back of the deque", function() {
    deque.addBack(10);
    deque.addBack(100);
    deque.addBack(1000);
    let removed = deque.removeBack();
    expect(removed).toBe(1000);
    expect(deque._list.size).toBe(2);
    removed = deque.removeBack();
    expect(removed).toBe(100);
    removed = deque.removeBack();
    expect(removed).toBe(10);
    expect(deque._list.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.removeBack()).toThrow(Error);
  });
});

describe("peekFront", function() {
  it("returns the value at the front of the deque", function() {
    deque.addFront(3);
    expect(deque.peekFront()).toBe(3);
    deque.addFront(5);
    expect(deque.peekFront()).toBe(5);
  });
});

describe("peekBack", function() {
  it("returns the value at the back of the deque", function() {
    deque.addBack(3);
    expect(deque.peekBack()).toBe(3);
    deque.addBack(5);
    expect(deque.peekBack()).toBe(5);
  });
});

describe("isEmpty", function() {
  it("returns true for empty deques", function() {
    expect(deque.isEmpty()).toBe(true);
  });

  it("returns false for non-empty deques", function() {
    deque.addFront(3);
    expect(deque.isEmpty()).toBe(false);
  });
});
