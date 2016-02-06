function MarkSixGenerator()
{
    this.result = [];

    this.generate = function () {
        while (this.result.length < 6) {
            // Get a random integer from 1 to 47.
            var num = Math.floor(Math.random() * 47) + 1;
            // No duplication.
            if (this.result.length > 0 && this.result.indexOf(num) >= 0) {

            }
            this.result.push(num);
        }
    }
}

var generator = new MarkSixGenerator();

$(function() {
    generator.generate();
    $('#result').text(generator.result.join(' '));
});
