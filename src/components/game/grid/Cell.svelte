<template lang="pug">
div.container(class:selected={selected})
	div.background
	div {cell.letter}
</template>


<script>
	export default {
		data() {
			return {
				cell: {
					letter: 'A',
					grid  : null,
					nRow  : null,
					nCol  : null
				}
			}
		},
		computed: {
			isSelected({cell: {nRow, nCol}}) {
				return (nCol % 2) === (nRow % 2)
			}
		}
	}
</script>


<style lang="scss">
	@import '../../../styles/abstracts/templates.scss';

	.container {
		@extend .fill-area;
		>div {
			@extend .fill-area;
			display: flex;
		}

		&.selected {
			> .background {
				background-color: #ff00ff;
			}
		}
	}
</style>