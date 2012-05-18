// Confirm 的单元测试
define(function (require){
    var Confirm = require('../src/confirm.js'),
        instance = null;

    describe('Confirm',function (){
        beforeEach(function (){
            instance = new Confirm({
                tpl: '#J-ui-confirm'
            });
        });

        it('Should has on,off,trigger,initialize,render,sync,bindUI,destroy,show,showTpl,confirm,getMask,getTpl,hide and hideTpl methods.',function (){
            spyOn(instance,'on');
            expect(instance.on).not.toHaveBeenCalled();

            spyOn(instance,'trigger');
            expect(instance.trigger).not.toHaveBeenCalled();

            spyOn(instance,'off');
            expect(instance.off).not.toHaveBeenCalled();

            spyOn(instance,'initialize');
            expect(instance.initialize).not.toHaveBeenCalled();

            spyOn(instance,'render');
            expect(instance.render).not.toHaveBeenCalled();

            spyOn(instance,'bindUI');
            expect(instance.bindUI).not.toHaveBeenCalled();

            spyOn(instance,'sync');
            expect(instance.sync).not.toHaveBeenCalled();

            spyOn(instance,'getMask');
            expect(instance.bindUI).not.toHaveBeenCalled();

            spyOn(instance,'getTpl');
            expect(instance.sync).not.toHaveBeenCalled();

            spyOn(instance,'show');
            expect(instance.show).not.toHaveBeenCalled();

            spyOn(instance,'showTpl');
            expect(instance.showTpl).not.toHaveBeenCalled();

            spyOn(instance,'hide');
            expect(instance.hide).not.toHaveBeenCalled();

            spyOn(instance,'hideTpl');
            expect(instance.hideTpl).not.toHaveBeenCalled();

            spyOn(instance,'destroy');
            expect(instance.destroy).not.toHaveBeenCalled();
        });

        it('Should has options property.',function (){
            expect(instance.options).toBeTruthy();
        });

        it('Should be rely on Overlay.',function (){
            expect(instance.NAME).toBe('Overlay');
        });

        it('Should has shown,confirm,hide evnts.',function (){
            var i = 0,
                j = 0;
            instance.on('confirm',function (){
                i++;
            });
            instance.on('shown',function (){
                j--;
            });
            instance.on('hide',function (o){
                i++;
                expect(o).toBe(instance);
            });
            instance.hide();
            expect(i).toBe(1);

            instance.confirm();
            expect(i).toBe(2);

            instance.show();
            expect(j).toBe(-1);
        });

        it('Destroy correct work',function (){
            instance.destroy();
            expect(instance.options.message).toBeNull();
            expect(instance.options.tpl).toBeNull();
            expect(instance.options.zIndex).toBe(9999);
            expect(instance.options.css).toBeDefined();
        });
    });
});