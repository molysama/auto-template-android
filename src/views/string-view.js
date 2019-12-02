
export default function loadView () {
    let val = '123'
    ui.statusBarColor("#000000")
    ui.layout(`
        <vertical bg="#708090">
            <vertical h="auto" align="center" marginTop="100">
                <text layout_weight="2" text="${val}" bg="#00ff00"/>
            </vertical>
        </vertical>
    `)
}