// JS representation of a dag

// Version 1 does not allow custom ids

function create() {
  let dag = {
    blocks: [],
  };

  // The genesis block is special in that it has no links
  dag.blocks.push({
    id: 0,
    links: [],
  });

  return dag;
}

// Once a block as added to the dag, it must not be edited.
// When adding a block, all the links must be defined.
// It is only possible to define outbound links for a block (not inbound).
//
// The dag with just the genesis is a dag.
// Each time you use addBlock to add a block, the dag is still a valid dag.
// Thus, the dag will always be a dag.
//
// When you add a block to a dag, it mutates the input dag.
function addBlock(dag, opts) {
  if (!opts.links || !opts.links.length) {
    throw new Error('addBlock needs links.')
  }

  for (let i in opts.links) {
    let link = opts.links[i]
    if (dag.blocks[link] === undefined) {
      throw new Error('Invalid link: ' + link)
    }
  }

  let id = dag.blocks.length;

  dag.blocks.push({
    id: id,
    links: opts.links,
  });

  return dag;
}

module.exports = {
  create,
  addBlock,
};
