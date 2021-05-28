import $ from "jquery";

const test = () => {
    for (let j = 0; j < 6; j++) {
        console.log( 'test-' + j );
    }
};
test();

$('input').hide();