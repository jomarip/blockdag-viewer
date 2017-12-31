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

// Lays out the dag in a nice and deterministic way
// It returns an object similar to the dag object, except with layout parameters.
// This is kinda inefficient but can be optimized to O(E) if layout is placed inside blocks
// By default, the scale is 100px
function layout(dag, inputOpts) {
  let opts = { // Defaults
    scaleX: 100,
    scaleY: 100,
    noisy: false,
  };

  Object.assign(opts, inputOpts);

  let depthMap = {};
  let layoutBlocks = [];
  let maxHeight = 0;
  let maxDepth = 0;

  for (let blockIndex in dag.blocks) {
    let block = dag.blocks[blockIndex];
    let height = 0;
    let currentLinks = [];
    for (let linkIndex in block.links) {
      let link = block.links[linkIndex];
      if (layoutBlocks[link].height >= height) {
        height = layoutBlocks[link].height + 1;
      }
      currentLinks.push({
        toX: layoutBlocks[link].x,
        toY: layoutBlocks[link].y,
      });
    }

    depthMap[height] = depthMap[height] ? depthMap[height] + 1 : 1;
    if (height > maxHeight) {
      maxHeight = height;
    }
    if (depthMap[height] > maxDepth) {
      maxDepth = depthMap[height];
    }

    let x = height * opts.scaleX;
    let y = (depthMap[height] - 1) * opts.scaleY;

    if (opts.noisy) {
      x += (block.id % 5) * 8;
      y += -((-block.id) % 5) * 8;
    }

    layoutBlocks.push({
      id: block.id,
      height: height,
      x: x,
      y: y,
      links: currentLinks,
    });

  }

  return {
    sizeX: (maxHeight) * opts.scaleX,
    sizeY: (maxDepth - 1) * opts.scaleY,
    blocks: layoutBlocks,
  }
}

function demoMine(dag) {
  let blocks = dag.blocks;

  let numLinks = 0;
  numLinks += Math.round(Math.random()*2);
  numLinks += Math.round(Math.random()*2);

  if (numLinks > blocks.length) {
    numLinks = blocks.length - 1;
  }
  if (numLinks < 1) {
    numLinks = 1;
  }

  let minLink = blocks.length > 15 ? blocks.length - 15 : 0;

  let links = [];

  while (links.length < numLinks) {
    let dest = Math.floor(Math.random() * (blocks.length - minLink)) + minLink;
    if (dest < minLink || links.indexOf(dest) > -1) {
      continue;
    }
    links.push(dest);
  }

  addBlock(dag, {
    links: links,
  });
}

module.exports = {
  create,
  addBlock,
  layout,
  demoMine,
};
