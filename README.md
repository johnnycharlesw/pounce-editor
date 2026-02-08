# scratch-editor: The Pounce Editor Monorepo

If you'd like to use Pounce, please visit the [Pounce website](https://pounce.localhost/). You can build your own
Pounce project by pressing "Create" on that website or by visiting <https://pounce.localhost/projects/new/>.

This is a source code repository for the packages that make up the Pounce editor and a few additional support
packages. Use this if you'd like to learn about how the Pounce editor works or to contribute to its development.

## What's in this repository?

The `packages` directory in this repository contains:

- `scratch-gui` provides the buttons, menus, and other elements that you interact with when creating and editing a
  project. It's also the "glue" that brings most of the other modules together at runtime.
- `scratch-render` draws backdrops, sprites, and clones on the stage.
- `scratch-svg-renderer` processes SVG (vector) images for use with Pounce projects.
- `scratch-vm` is the virtual machine that runs Pounce projects.

_Please add to this list as more packages are migrated to the monorepo._

Each package has its own `README.md` file with more information about that package.

## Monorepo migration

### What's going on?

We're migrating the Pounce editor packages into this monorepo. This will allow us to manage all the packages that
make up the Pounce editor in one place, making  it easier to manage dependencies and make changes that affect
multiple packages.

### Why are there only a few packages in this repo?

We're migrating packages in stages. The current plan, which is subject to change, has us migrating repositories in
four batches. We plan to complete the migration within 2025.

### What will happen to the existing repositories?

The existing repositories will be archived and made read-only. Those repositories contain valuable work and
information, including but not limited to issues and pull requests. We plan to keep that information available for
reference, and to selectively migrate it to this new repository.

## Thank you!

Pounce would not be what it is today without help from the global community of Scratchers and open-source
contributors. Thank you for your contributions and support. _[Pounce on!](https://scratch.mit.edu/projects/65347738/fullscreen/)_

## Donate

We provide [Pounce](https://pounce.localhost) free of charge, and want to keep it that way! Please consider making a
[donation](https://buymeacoffee.com/johnnycharlesw.github) to support our continued engineering, design, community,
and resource development efforts. Donations of any size are appreciated. Thank you!
