import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import './Shop.css';

function Shop() {
	return (
		<div id='boutique'>
			<h1>Le Rucher de Noah</h1>
			<div className='shop__container'>
				<div className='shop__container__left'>
					<div className='shop__container__left__image'>
						<img src='https://www.lerucherdenoah.fr/wp-content/uploads/2021/05/IMG_20210501_150730-1.jpg' alt='miel' />
					</div>
					<div className='shop__container__left__description'>
						<h2>Miel de fleurs</h2>
						<p>
							Le miel de fleurs est un miel polyfloral, c’est-à-dire qu’il est issu du nectar de plusieurs espèces de fleurs.
							Il est produit par les abeilles qui butinent les fleurs des champs et des forêts. Il est récolté en fin de
							saison, en août et septembre, lorsque les abeilles ont terminé leur travail de pollinisation.
						</p>
						<p>
							Le miel de fleurs est un miel liquide, de couleur ambrée, au goût doux et fruité. Il est très apprécié pour son
							goût délicat et sa texture fluide.
						</p>
						<p>
							Le miel de fleurs est un miel très polyvalent, il peut être utilisé pour sucrer les boissons chaudes, les
							yaourts, les céréales, les tartines, les crêpes, les gaufres, les gâteaux, les biscuits, les salades de fruits,
							les sauces, les vinaigrettes, les marinades, les viandes, les poissons, les légumes, les tisanes, les infusions,
							etc.
						</p>
					</div>
				</div>
				<div className='shop__container__right'>
					<div className='shop__container__right__price'>
						<p>10€</p>
					</div>
					<div className='shop__container__right__paypal'>
						<PayPalScriptProvider
							options={{
								'client-id': 'sb',
								currency: 'EUR',
							}}
						>
							<PayPalButtons
								createOrder={(data, actions) => {
									return actions.order.create({
										purchase_units: [
											{
												amount: {
													value: '10',
												},
											},
										],
									});
								}}
								onApprove={(data, actions) => {
									return actions.order.capture().then(function (details) {
										alert('Transaction completed by ' + details.payer.name.given_name + '!');
									});
								}}
							/>
						</PayPalScriptProvider>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Shop;
