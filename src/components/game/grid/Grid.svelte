<div class="grid">
	{#each grid as row, rowIndex}
		{#each row as cell, colIndex}
		<div class="cell" style="
			width: {100 / grid.nCols}%;
			height: {100 / grid.nRows}%;
			left: {colIndex * 100 / grid.nCols}%;
			top: {rowIndex * 100 / grid.nRows}%;
		">
		<Cell cell={cell} />
		</div>
		{/each}
	{/each}
</div>


<script>
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
			const grid = createGrid(5, 6, (nRow, nCol, grid) => ({
				letter: nRow * grid.nCols + nCol,
				nRow,
				nCol,
				grid
			}))

			this.set({grid})
		},
		components: {
			Cell: './Cell.svelte'
		}
	}
</script>


<style lang="scss">
	@import '../../../styles/abstracts/templates.scss';

	.grid {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.cell {
		width: 10em;
		height: 10em;
		position: absolute;
	}
</style>