const CoreLevelPouch = require('pouchdb-adapter-leveldb-core')
const rocksdb = require('pouchdb')

function RocksAdapter(opts, callback) {
    let newOpts = Object.assign(
        {
            db: rocksdb,
        },
        opts,
    )

    CoreLevelPouch.call(this, newOpts, callback)
}

RocksAdapter.valid = function () {
    return true
}

RocksAdapter.use_prefix = false

exports.default = function (PouchDB) {
    PouchDB.adapter('rocksdb', RocksAdapter, true)
}
