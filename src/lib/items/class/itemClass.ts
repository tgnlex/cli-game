class Item {
 public name: String;
 public value: Number;
 public type: String
 public description: String;
  
 public async inspect() {
    console.info(`Item: ${this.name}` )
    console.info(`Type: ${this.type} | ${this.value}`)
    console.info(`Description: ${this.description}`)
  }
}
export default Item;
