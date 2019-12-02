log('hello, world')

import loadLoginView from './views/xml-view'
import loadStringView from './views/string-view'

ui.layout(`
    <linear gravity="center">
        <horizontal>
            <button id="loadXml" w="250" h="*" text="加载xml" size="16" style="Widget.AppCompat.Button.Colored"/>
            <button id="loadString" w="250" h="*" text="加载string" size="16" style="Widget.AppCompat.Button.Colored"/>
            <button id="loadWithEngine" w="250" h="*" text="通过引擎加载" size="16" style="Widget.AppCompat.Button.Colored"/>
        </horizontal>
    </linear>
`)

// 通过xml加载界面，xml内不支持{{}}
ui.loadXml.on('click', () => {
    loadLoginView()
})

// 通过字符串模板加载界面，字符串内可使用${}替代{{}}
ui.loadString.on('click', () => {
    loadStringView()
})

// 通过引擎加载带UI的JS，由于这会运行两个程序，因此返回后将回到main.js
ui.loadWithEngine.on('click', () => {
    engines.execScriptFile('assets/js/example.js')
})