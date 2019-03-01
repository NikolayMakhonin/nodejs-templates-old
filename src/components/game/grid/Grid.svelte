<div ref:grid class="grid">
	{#each grid as row}
		{#each row as cell}
			<Cell {...cell} />
		{/each}
	{/each}
</div>


<script>
	import {TouchToMouse} from '../../../main/browser/helpers/touchMouse'

	function createGrid(nRows, nCols, createCell) {
		const grid = new Array(nRows)
		grid.nRows = nRows
		grid.nCols = nCols
		for (let i = 0; i < nRows; i++) {
			const row = new Array(nCols)
			grid[i] = row
			for (let j = 0; j < nCols; j++) {
				row[j] = createCell(i, j, grid)
			}
		}

		return grid
	}

	export default {
		data() {
			return {
				grid: [
					[
						{
							letter: 'A'
						}
					]
				]
			}
		},
		oncreate() {
			new TouchToMouse(this.refs.grid)

			const grid = createGrid(5, 6, (nRow, nCol, grid) => ({
				letter: nRow * grid.nCols + nCol,
				nRow,
				nCol,
				grid
			}))

			console.log(grid)

			this.set({grid})
		},
		components: {
			Cell: './Cell.svelte'
		}
	}
</script>


<style type="text/scss">
	@import '../../../styles/abstracts/templates.scss';

	.grid {
		@extend %fill;
		overflow: hidden;
		/*:global(*) {*/
			/*transition: all 0.5s ease;*/
		/*}*/
	}

</style>