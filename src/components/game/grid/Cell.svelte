<div
	ref:container
	class="container"
	class:selected="selected"
	class:hover="hover"
	style="
		width: {grid ? 100 / grid.nCols : 0}%;
		height: {grid ? 100 / grid.nRows : 0}%;
		left: {grid ? nCol * 100 / grid.nCols : 0}%;
		top: {grid ? nRow * 100 / grid.nRows : 0}%;
	"
>
	<div class="wrapper" on:click="console.log('event')">
		<div class="background" on:click="console.log('event')"></div>
		<div class="letter" on:click="console.log('event')">{letter}</div>
	</div>
</div>


<script>
	export default {
		data() {
			const grid = []
			grid.nCols = 0
			grid.nRows = 0

			return {
				letter: 'A',
				grid,
				nRow  : null,
				nCol  : null,
				hover : false,
				selected: false
			}
		},
		computed: {
			// selected({nRow, nCol}) {
			// 	return (nCol % 2) === (nRow % 2)
			// }
		},
		oncreate() {
			this.refs.container.onmouseenter = () => {
				this.set({selected: !this.get().selected, hover: true})
			}
			this.refs.container.onmouseout = () => {
				this.set({hover: false})
			}
		}
	}
</script>


<style type="text/scss">
	@import '../../../styles/abstracts/templates.scss';

	.container {
		@extend %fill;
		display: flex;

		> div {
			pointer-events: none;
		}

		> div, > div > div {
			@extend %fill;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.background {
			background-color: #ff00ff;
			margin: 1px;
		}

		.letter {

		}

		&.selected {
			.background {
				background-color: #ffff00;
			}
		}

		&.hover {
			> .wrapper {
				.background {
					opacity: 0.1;
				}

				/*transform: translate(2em, 2em);*/
				z-index: 100;
			}
		}
	}

</style>