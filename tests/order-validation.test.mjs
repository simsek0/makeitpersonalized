import {test} from 'node:test';import assert from 'node:assert/strict';import {validateOrder,validateContact} from '../lib/order-validation.ts';
const draft={category:'apparel',product:'Essential T-shirt',quantity:2,color:'White',size:'M',placement:'Front',text:'Hello',notes:'',neededBy:'',purpose:'Personal / gift'};
test('valid request preserves intentional text and quantity',()=>assert.equal(validateOrder({...draft,text:'  Hello  '}).text,'Hello'));
test('rejects invalid product/category combinations',()=>assert.throws(()=>validateOrder({...draft,category:'engraving'})));
test('rejects inherited property names as categories',()=>assert.throws(()=>validateOrder({...draft,category:'__proto__'})));
test('rejects fractions, zero and excessive quantities',()=>{for(const quantity of [0,1.5,5001,NaN])assert.throws(()=>validateOrder({...draft,quantity}))});
test('rejects oversized text and invalid dates',()=>{assert.throws(()=>validateOrder({...draft,text:'a'.repeat(501)}));assert.throws(()=>validateOrder({...draft,neededBy:'2027-02-30'}))});
test('requires meaningful contact information',()=>{assert.throws(()=>validateContact('A','bad',''));assert.throws(()=>validateContact('Test','test@example.com','<script>'));assert.equal(validateContact(' Tester ','TEST@example.com','503-303-8073').email,'test@example.com')});
