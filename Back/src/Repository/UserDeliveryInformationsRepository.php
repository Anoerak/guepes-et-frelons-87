<?php

namespace App\Repository;

use App\Entity\UserDeliveryInformations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserDeliveryInformations>
 *
 * @method UserDeliveryInformations|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserDeliveryInformations|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserDeliveryInformations[]    findAll()
 * @method UserDeliveryInformations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserDeliveryInformationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserDeliveryInformations::class);
    }

//    /**
//     * @return UserDeliveryInformations[] Returns an array of UserDeliveryInformations objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?UserDeliveryInformations
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}