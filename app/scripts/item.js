function Item(barcode,sort, name, unit, price) {
    this.barcode = barcode;
    this.sort = sort;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}