import Btn from './components/Btn.vue'
import CheckBox from './components/CheckBox.vue'
import Dropdown from './components/Dropdown.vue'
import DropMenu from './components/DropMenu.vue'
import DropSelect from './components/DropSelect.vue'
import Flayout from './components/Flayout.vue'
import FlexWindow from './components/FlexWindow.vue'
import GridCol from './components/GridCol.vue'
import GridRow from './components/GridRow.vue'
import Icon from './components/Icon.vue'
import MenuIter from './components/MenuIter.vue'
import NavGroup from './components/NavGroup.vue'
import PureInput from './components/PureInput.vue'
import PureText from './components/PureText.vue'
import PureSelect from './components/PureSelect.vue'
import RadioGroup from './components/RadioGroup.vue'
import SimpleTab from './components/SimpleTab.vue'
import SimpleTable from './components/SimpleTable.vue'
import FormControl from './components/FormControl.vue'

export function install(Vue) {
	Object.keys(components).forEach((it) => {
		Vue.component(it, components[it])
	})
}

let components = {
	Btn,
	CheckBox,
	Dropdown,
	DropMenu,
	DropSelect,
	Flayout,
	FlexWindow,
	GridCol,
	GridRow,
	Icon,
	MenuIter,
	NavGroup,
	PureInput,
	PureText,
	PureSelect,
	RadioGroup,
	SimpleTab,
	SimpleTable,
	FormControl,
}

Object.defineProperty(components, 'install', {
	value: install,
	enumerable : false,
	configurable : true
})

export default components
export const  __esModule = true
