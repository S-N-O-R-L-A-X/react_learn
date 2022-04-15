/**
 * without this file, an error will occur when using jest running.
 * Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none.        
 * To configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`   
 * before using any of Enzyme's top level APIs, where `Adapter` is the adapter
 * corresponding to the library currently being tested. 
 */
module.exports=
{
    setupFilesAfterEnv: [
        "./setupTests.js"
    ]
}