import React from 'react';

import useTitle from '@Utils/hooks/useTitle';
import './MentionsLegales.css';

function MentionsLegale() {
	useTitle('G&F87 | Mentions légales');
	return (
		<section id='center_column'>
			<div id='rubric_title'>Mentions légales</div>
			<div id='content_pages'>
				<div className='row'>
					<div id='mentions_legales_client' className='col-sm-4'>
						<p id='infoclient'>
							<strong>Raison sociale : </strong>
							<abbr title='Entreprise Individuelle'>EI.</abbr> Guepes Et Frelons 87
							<br />
							<strong>Siège social : </strong>Lieu Dit Pierrebrune
							<br />
							87500 Saint Yrieix La Perche
							<br />
							France
							<br />
							<strong>
								<abbr title='Téléphone'>Tél.</abbr>{' '}
							</strong>
							05 64 17 21 45
							<br />
							<strong>E-mail : </strong>
							<img
								alt='adresse e-mail de Guepes Et Frelons 87'
								src='data:image/png;base64,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'
							/>
							<br />
							<strong>Siret : </strong>84252807700014
							<br />
							<strong>Directeur de publication : </strong>Proust Damien
							<br />
							<strong>N° de TVA intracommunautaire : </strong>FR50842528077
							<br />
						</p>
					</div>

					<div id='mentions_legales_hebergeur' className='col-sm-4'>
						<p id='hebergeur'>
							<strong>Hébergeur : </strong>Owentis
							<br />
							<strong>Raison sociale : </strong>
							<abbr title='Société par Actions Simplifiées'>SAS.</abbr> Owentis
							<br />
							<strong>Siège social : </strong>53 rue Baudin
							<br />
							92300 Levallois Perret
							<br />
							<strong>
								<abbr title='Registre du Commerce et des Sociétés'>RCS.</abbr> de Nanterre :{' '}
							</strong>
							405 398 736
							<br />
						</p>
					</div>
				</div>

				<div id='credits' className='row'>
					<div className='col-sm-12'>
						<ul>
							<li>
								<strong>Crédits photographiques : </strong>
							</li>
							<li>abet © Adobe Stock</li>
							<li>Floydine © Adobe Stock</li>
							<li>ascain64 © Adobe Stock</li>
							<li>Forance © Adobe Stock</li>
							<li>skampixelle © Adobe Stock</li>
							<li>Eduardo Gonzalez © Adobe Stock</li>
							<li>Eileen Kumpf © Adobe Stock</li>
							<li>Metallic Citizen © Adobe Stock</li>
							<li>rattiphong101 © Adobe Stock</li>
							<li>Michael Tieck © Adobe Stock</li>
							<li>Nordreisender © Adobe Stock</li>
							<li>LIGHTFIELD STUDIOS © Adobe Stock</li>
							<li>Jan Schuler © Adobe Stock</li>
							<li>skampixelle © Adobe Stock</li>
							<li>Marc © Adobe Stock</li>
						</ul>
					</div>
				</div>

				<div id='texte_mentions_legales' className='row'>
					<div className='col-xs-12'>
						<p>
							Le présent site est la propriété de IAmseb situé 35 route de la Condamine, 87500 SAINT
							YRIEIX LA PERCHE.
						</p>
						<p className='right'>
							<i>Page mise à jour le 01 juin 2023.</i>
						</p>

						<p className='justify'>
							<strong>www.anti-nuisible87.fr</strong> a pour ambition d’être exemplaire et de contribuer à
							la création d’un monde élégant. Nous accordons une grande valeur à l’honnêteté et à la
							clarté et avons à cœur de construire avec nos clients des relations fortes et durables,
							fondées sur la confiance et l’intérêt mutuel. Conformément à cette philosophie,{' '}
							<strong>la protection de vos données personnelles est essentielle</strong> à nos yeux et
							nous souhaitons vous informer par l’intermédiaire de la présente politique de protection des
							données personnelles de{' '}
							<strong>la manière dont nous collectons et traitons ces données</strong>.<br />
							La présente politique de confidentialité définit et vous informe de la manière dont
							www.anti-nuisible87.fr utilise et protège les informations que vous nous transmettez, le cas
							échéant, lorsque vous utilisez le présent site accessible à partir de l’URL suivante :
							www.anti-nuisible87.fr.
							<br />
							Veuillez noter que cette politique de confidentialité est{' '}
							<strong>susceptible d’être modifiée ou complétée</strong> à tout moment par
							www.anti-nuisible87.fr, notamment en vue de se conformer à toute évolution législative,
							réglementaire, jurisprudentielle ou technologique. Dans un tel cas, la{' '}
							<strong>date de sa mise à jour</strong> sera clairement identifiée en tête de la présente
							politique. Ces modifications engagent l’Utilisateur dès leur mise en ligne. Il convient par
							conséquent que l’Utilisateur consulte régulièrement la présente politique de confidentialité
							et d’utilisation des cookies afin de prendre connaissance de ses éventuelles modifications.
						</p>

						<div className='row'>
							<div className='col-sm-6'>
								<h2>Règlement général sur la protection des données (RGPD)</h2>
								<p className='justify'>
									Guepes Et Frelons 87 s’engage à ce que la collecte et le traitement de vos données,
									effectués à partir du site www.anti-nuisible87.fr soient{' '}
									<strong>conformes au règlement général sur la protection des données (RGPD)</strong>
									. Chaque formulaire ou téléservice limite la collecte des données personnelles au
									strict nécessaire (minimisation des données) et indique notamment :
								</p>
								<ul className='puce'>
									<li>quels sont les objectifs du recueil de ces données,</li>
									<li>
										si ces données sont obligatoires ou facultatives pour la gestion de votre
										demande,
									</li>
									<li>
										qui pourra en prendre connaissance (uniquement Guepes Et Frelons 87 en principe,
										sauf précision dans le formulaire lorsqu’une transmission à un tiers est
										nécessaire à la gestion de votre demande),
									</li>
								</ul>
								<p className='justify'>
									Les données personnelles recueillies dans le cadre des services proposés sur
									www.anti-nuisible87.fr sont traitées selon des <strong>protocoles sécurisés</strong>{' '}
									et permettent à Guepes Et Frelons 87 de gérer les demandes reçues dans ses
									applications informatiques.
									<br />
									Pour toute information ou exercice de vos{' '}
									<strong>droits Informatique et Libertés</strong> sur les traitements de données
									personnelles gérés par Guepes Et Frelons 87, vous pouvez{' '}
									<strong>contacter Guepes Et Frelons 87</strong> et éventuellement son délégué à la
									protection des données (DPO), si distingué.
								</p>

								<h2>Confidentialité</h2>
								<p className='justify'>
									Guepes Et Frelons 87 n’enregistre pas d’informations personnelles permettant
									l’identification, à l’exception des <strong>formulaires</strong> que l’utilisateur
									est <strong>libre de remplir</strong>. Ces informations ne seront{' '}
									<strong>pas utilisées sans votre accord</strong>, nous les utiliserons seulement
									pour vous adresser des <strong>courriers</strong>, des <strong>brochures</strong>,
									des <strong>devis</strong> ou vous <strong>contacter</strong>.<br />
									Les informations recueillies sur les sites bénéficient de la{' '}
									<strong>protection de la loi "Informatique et Libertés"</strong> n° 78-17 du 06
									janvier 1978. Elles bénéficient d’un droit d’<strong>accès</strong>, de{' '}
									<strong>rectification</strong>, d’<strong>opposition à communication</strong> et de{' '}
									<strong>suppression</strong> sur simple demande à{' '}
									<img
										alt='adresse e-mail de Guepes Et Frelons 87'
										src='data:image/png;base64,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'
									/>
									.<br />
									Guepes Et Frelons 87 pourra procéder à des <strong>
										analyses statistiques
									</strong>{' '}
									sans que celles-ci soient nominatives et pourra en informer des tiers (organismes
									d’évaluation de fréquentation) sous une forme résumée et{' '}
									<strong>non nominative</strong>.
								</p>

								<h2>Utilisation de cookies</h2>
								<p className='justify'>
									La gestion des commandes et l’affichage du site internet nécessite l’utilisation de
									cookies. Des <strong>informations non personnelles sont enregistrées</strong> par ce
									système de cookies (fichiers texte utilisés pour reconnaître un utilisateur et ainsi
									faciliter son utilisation du site). Ceux-ci n’ont aucune signification en dehors de
									leur utilisation sur le site www.anti-nuisible87.fr
								</p>
							</div>

							<div className='col-sm-6'>
								<h2>Liens hypertexte</h2>
								<p className='justify'>
									Vous êtes libres d’<strong>établir des liens</strong> vers ce site dans la mesure où
									ils <strong>ne portent pas atteinte</strong> à l’image de son éditeur. Vous êtes
									autorisés à établir des liens vers les pages du site au format : html, php, xml.
									<br />
									La pratique du <strong>framing est interdite</strong> de même que toute autre
									pratique ou technique susceptible d’engendrer une confusion dans l’esprit du public.
									<br />
									Sont prohibés les liens profonds vers les documents aux formats pdf, Doc, ou rtf. En
									effet, ce type de document ne permet pas de prendre connaissance des présentes
									conditions d’utilisation.
									<br />
									Guepes Et Frelons 87 ne contrôle pas les sites en connexion avec le sien, et{' '}
									<strong>ne saurait donc être responsable de leur contenu</strong>. Les risques liés
									à l’utilisation de ces sites incombent pleinement à l’utilisateur. Il se conformera
									à leurs conditions d’utilisation.
								</p>

								<h2>Responsabilité</h2>
								<p className='justify'>
									Guepes Et Frelons 87 décline toute responsabilité pour les difficultés rencontrées
									lors de l’accès à son site ou pour toute défaillance de communication.
									<br />
									Guepes Et Frelons 87 se réserve la possibilité de <strong>modifier</strong>,
									d’interrompre temporairement ou de façon permanente,{' '}
									<strong>toute ou une partie du site</strong>, sans préavis. Guepes Et Frelons 87 ne
									pourra en aucun cas être tenu pour responsable à votre encontre ou à l’encontre d’un
									tiers de toute modification, interruption ou suspension du site.
								</p>

								<h2>Propriété intellectuelle</h2>
								<p className='justify'>
									En accord avec les lois régissant la{' '}
									<strong>
										propriété intellectuelle, la reproduction ou l’utilisation des éléments
									</strong>{' '}
									se trouvant dans ce site Internet, en totalité ou en partie est strictement{' '}
									<strong>interdite</strong>. Seules sont maintenues les exceptions légales dont
									notamment la représentation dans le cadre du cercle de famille, la copie privée ou
									le droit de courte citation.
									<br />
									Ainsi, tous les textes, photos, logos, marques et autres éléments reproduits sur ce
									site sont réservés et{' '}
									<strong>protégés par le droit de la propriété intellectuelle</strong>. (Droit
									auteur, droit voisin, droit des marques...).
									<br />
									<br />
									Toute <strong>représentation</strong> totale ou partielle de ce site par quelque
									procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet
									est interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2
									et suivants du Code de la propriété intellectuelle.
									<br />
									<br />
									Il en est de même des éventuelles <strong>bases de données</strong> figurant sur le
									site Internet qui sont protégées par les dispositions de la loi du 11 juillet 1998
									portant transposition dans le Code de la propriété intellectuelle (CPI) de la
									directive européenne du 11 mars 1996 relative à la{' '}
									<strong>protection juridique des bases de données</strong>.
								</p>
							</div>
						</div>
						<p className='right'>Bonne visite.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MentionsLegale;
