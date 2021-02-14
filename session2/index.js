let kelereng = [1, 2, 3, 'Andy', false, [4, 5, 6]]

// console.log(kelereng[5][1])

const user = {
  name: 'Adi Nugroho',
  handle: '@adinugroho',
  location: 'Jakarta, Indonesia'
}

const { name: nama, handle: urus, location: lokasi } = user

// console.log(nama, urus, lokasi)

const csv = '1997,Ford,F350,Must Sell!'
const [tahun, merk, model, deskripsi] = csv.split(',')

// console.log(tahun, merk, model, deskripsi)

const abc = ['a', 'b', 'c']
console.log(abc.join(' - '))
